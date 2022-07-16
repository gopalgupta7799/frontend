import './Home.css'
import React, { useEffect } from 'react'
import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import backgroundImage from '../../Images/bg3.jpg'

export default function Home() {
  useEffect(() => {

    window.scrollTo(0, 0)


    const scene = new three.Scene()
    const camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 8)

    const textureLoader = new three.TextureLoader()
    const bgTexture = textureLoader.load(backgroundImage)
    scene.background = bgTexture

    const canvas = document.getElementById('canvas')
    const renderer = new three.WebGLRenderer({ canvas })

    const noOfBubbles = 40
    let bubbles = [];
    let ymove = []
    let xmove = []
    let stoppedBubbleIndex = null
    for (let i = 0; i < noOfBubbles; i++) {
      let bubbleGeometry = new three.SphereGeometry(0.3 + Math.random() * 1.2, 64, 32)
      let bubbleMaterial = new three.MeshStandardMaterial({ color: 'white' })
      let bubble = new three.Mesh(bubbleGeometry, bubbleMaterial)
      bubble.position.x = -3 + Math.random() * 6
      bubble.position.y = -27 + Math.random() * 12
      bubble.position.z = -5 + Math.random() * 6
      xmove.push(-0.1 + Math.random() * 0.2)
      ymove.push(0.1 + Math.random() * 0.2)
      bubbles.push(bubble)
      scene.add(bubble)
    }

    const oc = new OrbitControls(camera, canvas)
    oc.enableZoom = false
    oc.enablePan = false

    const controls = new DragControls([...bubbles], camera, renderer.domElement)
    controls.addEventListener('drag', (e) => {
      oc.enabled = false
      let draggedBubble = e.object
      for (let i = 0; i < noOfBubbles; i++) {
        if (bubbles[i] === draggedBubble) {
          stoppedBubbleIndex = i
          xmove[i] = 0
          ymove[i] = 0
          break
        }
      }
    })

    const light = new three.PointLight(0xffffff, 1);
    const light2 = new three.PointLight(0xffffff, 0.5);

    light.position.set(1, 4, 8);
    light2.position.set(-1, -4, 0);
    scene.add(light)
    scene.add(light2)

    const moveBubbles = () => {
      requestAnimationFrame(moveBubbles)
      for (let i = 0; i < noOfBubbles; i++) {
        bubbles[i].position.x += xmove[i]
        bubbles[i].position.y += ymove[i]
      }
    }
    moveBubbles()

    const resetBubbles = () => {
      bubbles.forEach((bubble) => {
        if (bubble.position.y > 15) {
          bubble.position.x = -3 + Math.random() * 6
          bubble.position.y = -27 + Math.random() * 12
          bubble.position.z = -5 + Math.random() * 6
        }
      })
    }

    const resetMoves = () => {
      if (stoppedBubbleIndex !== null) {
        xmove[stoppedBubbleIndex] = -0.005 + Math.random()
        ymove[stoppedBubbleIndex] = 0.001 + Math.random() * 0.02
        stoppedBubbleIndex = null
      }
    }

    canvas.addEventListener('mousedown', e => {
      resetBubbles()
    })
    canvas.addEventListener('mousemove', e => {
      resetBubbles()
    })
    canvas.addEventListener('mouseup', e => {
      resetMoves()
      oc.enabled = true
    })

    canvas.addEventListener('touchstart', e => {
      resetBubbles()
    })
    canvas.addEventListener('touchmove', e => {
      resetBubbles()
    })
    canvas.addEventListener('touchend', e => {
      resetMoves()
      oc.enabled = true
    })

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera)
    }
    animate()

  }, [])
  return (
    <div>
      <canvas id='canvas'></canvas>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere velit reiciendis officiis a neque temporibus asperiores at, animi, harum fugiat non aliquam commodi quis delectus aspernatur sed cupiditate rerum quaerat fuga? Ducimus, itaque quaerat sit, aliquid totam maiores id, incidunt ratione expedita excepturi aspernatur hic rem pariatur sequi. Dolorem culpa assumenda quidem dolores beatae nemo. Deserunt alias, similique quam nulla maiores ab! Sequi illum iusto explicabo in sunt nobis maxime provident est voluptas temporibus quibusdam ipsum fugiat minus expedita quas modi tenetur, ea odio dolore, molestiae tempora omnis qui. Autem veritatis neque quas, veniam earum vitae officia animi, similique fugiat dolorem consectetur incidunt natus eligendi iste molestias, laborum laudantium fugit ab nobis omnis vero voluptatum beatae quidem consequatur. Error tenetur consequatur illo tempore saepe nostrum enim consectetur maxime sapiente deserunt fugiat illum blanditiis obcaecati neque aliquid commodi eius earum laborum, repellendus nihil eligendi temporibus. Repellat fuga dolorem dicta reprehenderit quasi tempora eius illum fugiat necessitatibus totam, rerum ipsa nulla nemo quam maiores natus aperiam dolor numquam est optio reiciendis, sunt commodi soluta. Fuga voluptatibus laudantium sunt in architecto sint quisquam hic dolor temporibus, ipsa suscipit ad quo, recusandae tempore? Magni asperiores maiores cum totam quidem eos, doloribus veritatis alias! Nihil laudantium illum maiores reiciendis, labore non optio omnis eum facere maxime nobis cumque quasi laboriosam eaque vitae? Aspernatur vel fugiat ducimus expedita atque dolorum fugit officia saepe, totam animi natus repellat velit, voluptas corrupti obcaecati quas necessitatibus! Atque vel debitis, ab odio a dolores accusamus incidunt animi at reiciendis similique nostrum praesentium. Voluptatem, sapiente dolorem totam alias rem modi cumque possimus deleniti magni, delectus recusandae nihil ad omnis ipsum inventore sint error cum reiciendis architecto suscipit. Magnam quos natus ea quibusdam dolorum eaque ullam. Minima perspiciatis animi harum consequuntur, velit pariatur necessitatibus, libero laborum sint sed asperiores voluptatem tempora! Omnis tenetur mollitia sequi id reiciendis rem rerum maxime eius nisi, consequuntur commodi nobis possimus illum esse et aliquam expedita facilis. In a culpa corrupti. Repudiandae unde dicta doloribus similique nobis, quam voluptate quis ratione nostrum possimus porro eius rem vel dignissimos dolore quibusdam atque fuga exercitationem officiis deleniti deserunt perferendis! Cum aut quis in voluptatibus. Voluptatem maiores optio totam soluta eligendi magni vitae beatae ipsum! Odio possimus itaque laboriosam accusamus repellat optio voluptas id labore voluptatibus fuga quam architecto, numquam explicabo vel quasi esse perferendis cupiditate quia saepe, veniam maiores! Optio dicta impedit quidem culpa cupiditate facere aliquam numquam necessitatibus. Quam sint cum suscipit eaque omnis distinctio commodi dolore possimus recusandae, nemo dignissimos consequatur ipsam, inventore, blanditiis quaerat aut vel odit placeat quo! Quae praesentium architecto sint molestiae voluptate ad in magni corporis nostrum consequatur exercitationem provident quam ut tempore, unde laborum vero? Placeat, tenetur id neque harum in odit voluptas impedit deserunt, dignissimos doloribus tempora nobis similique, magni optio temporibus. Architecto aut, quidem, ipsa odit voluptatibus ea nam quaerat rem debitis totam, minima quas? Corporis, provident? Error consequatur explicabo eaque tenetur sapiente rem voluptate laboriosam, nihil, corrupti odit quia ducimus. Ab officiis soluta fuga. Quam cum facere magnam accusantium.
      </div>
    </div>
  )
}
