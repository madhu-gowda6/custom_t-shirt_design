import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, genratingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='ASK AI TO GENETATE IMAGES....'
        rows={5}
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {genratingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ):(
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={()=> handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI full"
              handleClick={()=> handleSubmit('full')}
              customStyles="text-xs px-5"
            />
          </>
        )}

      </div>
    </div>
  )
}

export default AIPicker