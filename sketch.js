function setup() {
  createCanvas(2100, 2100);
  background(0, 0, 0)
  let y = 20
  for (let i = 0; i < 2; i++) {
    let x = 120
    for (let i = 0; i < 7; i++) {
      alien(x, y)
      x += 300
    }
    y += 200
  }

  y += 40

  for (let i = 0; i < 2; i++) {
    let x = 80
    for (let i = 0; i < 7; i++) {
      alien2(x, y)
      x += 300
    }
    y += 200
  }


}

function alien(x, y) {
  stroke(255, 255, 255)
  // color/body
  fill(255, 255, 255)
  rect(x + -0, y + 0, 40, 20)
  rect(x + -20, y + 20, 80, 20)
  rect(x + -40, y + 40, 120, 20)
  rect(x + -60, y + 80, 160, 20)
  rect(x + -60, y + 60, 40, 20)
  rect(x + 0, y + 60, 40, 20)
  rect(x + 60, y + 60, 40, 20)
  rect(x + -40, y + 100, 20, 20)
  rect(x + -0, y + 100, 40, 20)
  rect(x + 60, y + 100, 20, 20)
  //
  rect(x + -60, y + 120, 20, 20)
  rect(x + -40, y + 140, 20, 20)
  //
  rect(x + 80, y + 120, 20, 20)
  rect(x + 60, y + 140, 20, 20)


  noFill()
}
function alien2(x, y) {
  stroke(255, 255, 255)
  fill(255, 255, 255)
  rect(x + -0, y + 0, 140, 20)
  rect(x + 20, y + -20, 20, 20)
  rect(x + -0, y + -40, 20, 20)
  rect(x + 100, y + -20, 20, 20)
  rect(x + 120, y + -40, 20, 20)

  rect(x + -20, y + 20, 40, 20)
  rect(x + 40, y + 20, 60, 20)
  rect(x + 120, y + 20, 40, 20)

  rect(x + -40, y + 40, 220, 20)

  rect(x + 0, y + 60, 140, 20)

  rect(x + -40, y + 60, 20, 40)
  rect(x + 160, y + 60, 20, 40)

  rect(x + -0, y + 80, 20, 20)
  rect(x + 120, y + 80, 20, 20)

  rect(x + 20, y + 100, 40, 20)
  rect(x + 80, y + 100, 40, 20)

  noFill()
}


