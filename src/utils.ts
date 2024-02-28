const fs = require("fs")
const path = require("path")
const readline = require("readline")

export const checkDuplicates = (arr: any[]) => {
  if (!arr.length) {
    return true
  }

  const set = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return false
    }

    set.add(arr[i])
  }
  console.log("set: " + JSON.stringify(Array.from(set)))

  let noDuplicates = false

  const filePath = path.join(".", "array.txt")

  const readStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity, // Recognize all instances of CR LF ('\r\n') as a single line break.
  })

  rl.on("line", (line: any) => {
    console.log(`Line from file: ${line}`)
    console.log("noDuplicates: ", noDuplicates)

    // Process the chunk here
    // console.log(chunk.toString())

    const number = +line.toString().trim() 

    if (set.has(number)) {
      console.log("duplicate")
      noDuplicates = true
    }

    // for (let i = 0; i < numbers.length; i++) {
    //   console.log(numbers[i])
    //   if (set.has(numbers[i])) {
    //     isDuplicate = true
    //   }
    // }
    // Process each line
  })

  // Event listener for the 'close' event, emitted when the readline.Interface has finished reading the file
  rl.on("close", () => {
    console.log("Finished reading file")
    console.log(noDuplicates)
    // Perform any cleanup or final operations here
  })

  //   readStream.on("data", (chunk: any) => {
  //     console.log("Received a chunk of size:", chunk.length)
  //     // Process the chunk here
  //     console.log(chunk.toString())

  //     const numbers = chunk.toString().split(",")

  //     for (let i = 0; i < numbers.length; i++) {
  //       console.log(numbers[i])
  //       if (set.has(numbers[i])) {
  //         isDuplicate = true
  //       }
  //     }
  //   })

  //   readStream.on("end", () => {})

  readStream.on("error", (err: any) => {
    console.error("An error occurred:", err.message)
  })

  return noDuplicates
}

checkDuplicates([1, 2, 3, 4])
