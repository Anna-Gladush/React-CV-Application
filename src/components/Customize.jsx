const Customize = () => {
  const updateProperty = (key, val) => {
    document.body.style.setProperty(key, val)
  }

  const fontChange = (font) => {
    updateProperty("--resume-font", font)
  }
  return (
    <div className='settings'>
      <div className='color'>
        <h3>Color</h3>
        <p>Accent Color <input type="color" onChange={(e) => {
          const color = e.target.value
          const r = parseInt(color.substring(1,2), 16)
          const g = parseInt(color.substring(3,2), 16)
          const b = parseInt(color.substring(5,2), 16)

          const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b

          const isBrighter = brightness > 127
          
          const sectionBackground = isBrighter
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(14, 55, 78, 0.07)";
          const headerResumeCol = isBrighter ? "black" : "white"

          updateProperty("--resume-header-color", headerResumeCol);
          updateProperty("--resume-section-bg", sectionBackground);
          updateProperty("--resume-accent-color", color);
          console.log(headerResumeCol)
          }}/></p>
      </div>
        <div className='font'>
        <h3>Fonts</h3>
        <div>
          <button className='font-btn serif' onClick={()=> {fontChange("serif")}}><span>Aa</span>Serif</button>
          <button className='font-btn sans' onClick={()=> {fontChange("NotoSans")}}><span>Aa</span>Sans</button>
          <button className='font-btn mono' onClick={()=> {fontChange("monospace")}}><span>Aa</span>Mono</button>
        </div>
        
      </div>
    </div>
  )
}

export default Customize