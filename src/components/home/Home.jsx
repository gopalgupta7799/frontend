import './Home.css'
import React, { useEffect } from 'react'
import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { Typography } from '@mui/material'
import TimeLine from '../timeLine/TimeLine'
import myImage from '../../Images/myImage.png'

export default function Home() {
  useEffect(() => {

    const shape = document.getElementById('shape');
    const ctx = shape.getContext('2d');
    const width = shape.width
    ctx.beginPath();
    ctx.fillStyle = 'rgb(216, 216, 216)'
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(width / 2, 20, width, 0);
    ctx.fill();

    window.scrollTo(0, 0)

    const scene = new three.Scene()
    const camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 8)

    const canvas = document.getElementById('canvas')
    const renderer = new three.WebGLRenderer({ canvas, alpha: true })

    // camera.lookAt(scene.position);

    const noOfBubbles = 30
    let bubbles = [];
    let ymove = []
    let xmove = []
    let stoppedBubbleIndex = null
    for (let i = 0; i < noOfBubbles; i++) {
      let bubbleGeometry = new three.SphereGeometry(0.2 + Math.random(), 64, 32)
      let bubbleMaterial = new three.MeshStandardMaterial({ color: 'white' })
      let bubble = new three.Mesh(bubbleGeometry, bubbleMaterial)
      bubble.position.x = -3 + Math.random() * 6
      bubble.position.y = -27 + Math.random() * 12
      bubble.position.z = -5 + Math.random() * 6
      xmove.push(-0.1 + Math.random() * 0.2)
      ymove.push(0.1 + Math.random() * 0.25)
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

    const light = new three.PointLight(0xffffff, 1)

    light.position.set(1, 4, 8)
    scene.add(light)

    const moveBubbles = () => {
      requestAnimationFrame(moveBubbles)
      for (let i = 0; i < noOfBubbles; i++) {
        bubbles[i].position.x += xmove[i]
        bubbles[i].position.y += ymove[i]
      }
    }
    moveBubbles()

    const resetBubbles = () => {
      bubbles.forEach((bubble, i) => {
        if (bubble.position.y > 15) {
          bubble.position.x = -3 + Math.random() * 6
          bubble.position.y = -27 + Math.random() * 12
          bubble.position.z = -5 + Math.random() * 6
          xmove[i] = -0.1 + Math.random() * 0.2
          ymove[i] = 0.1 + Math.random() * 0.25
        }
      })
    }

    const resetMoves = () => {
      if (stoppedBubbleIndex !== null) {
        xmove[stoppedBubbleIndex] = -0.1 + Math.random() * 0.2
        ymove[stoppedBubbleIndex] = 0.1 + Math.random() * 0.025
        stoppedBubbleIndex = null
      }
    }
    document.addEventListener('scroll', e => {
      resetBubbles()
    })
    canvas.addEventListener('mousedown', e => {
      resetBubbles()
    })
    let rotation = 0
    canvas.addEventListener('mousemove', e => {
      resetBubbles()
      // let offsetX = e.offsetX
      // let offsetY = e.offsetY
      // let xv = -1 + (offsetX / e.target.width) * 2
      // camera.position.x = 8 * xv
      // camera.position.z = 8 - Math.abs(xv) * 8
      // camera.rotation.y = Math.PI * xv / 2

      // let yv = -1 + (offsetY / e.target.height) * 2
      // camera.position.y = 8 * yv
      // camera.position.z = 8 - Math.abs(yv) * 8
      // camera.rotation.x = Math.PI * yv / 2
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
    <div className='home'>
      <div className="cover">
        <img src={myImage} alt="" id="myImage" />
        <canvas id='canvas'></canvas>
      </div>
      <div className="timeline">
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine items={[1, 2, 3, 4]} />
      </div>
      <div className="skillsArea">
        <canvas id="shape"></canvas>
        <div className="skills">
          <Typography variant='h3'>SKILLS</Typography>
          <div className="skillsCubes">
            <div className="cubes-shadows">
              <div className="skillsCube" id="firstCube">
                <div className="skillsCubeFaces skillsCubeFace-1">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-2">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-3">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-4">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-5">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-6">
                  <img src={myImage} alt="skill" />
                </div>
              </div>
              <div className="cubeShadow"></div>
            </div>
            <div className="cubes-shadows">
              <div className="skillsCube" id="secondCube">
                <div className="skillsCubeFaces skillsCubeFace-1">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-2">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-3">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-4">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-5">
                  <img src={myImage} alt="skill" />
                </div>
                <div className="skillsCubeFaces skillsCubeFace-6">
                  <img src={myImage} alt="skill" />
                </div>
              </div>
              <div className="cubeShadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
