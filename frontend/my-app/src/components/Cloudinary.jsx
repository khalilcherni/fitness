import React ,{useState}from 'react' 
import axios from 'axios'

function Cloudinary() {

    const [File,setFile]=useState(null)
    const [url,seturl]=useState("")
    const uploadImage= async()=>{
        const form = new FormData()
        form.append("File",File)
        form.append("upload_preset","hibahiba11")


       await axios.post("https://api.cloudinary.com/v1_1/dsrcopz7v/upload",form)
       .then((result)=>seturl(result.data.secure_url))


    }

  return (
    <div>
        <input type ="file" value={File} onChange={e=>setFile(e.target.value)[0]}/>
        <br/>
        <button onClick={uploadImage}> upload !</button>
        <img src={url}  />

    </div>
  )
}

export default Cloudinary

// dsrcopz7v
// hibahiba11
//https://api.cloudinary.com/v1_1