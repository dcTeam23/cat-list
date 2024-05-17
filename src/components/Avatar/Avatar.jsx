

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property { 'square' | 'circle' } AvatarProps.format - Formato do Avatar (Circular ou Quadrado)
 * @param {AvatarProps} props
 * @param props
 */


export function Avatar({ imgSrc, descricao, format }) {
    
 return (
     <div className="container flex justify-center items-center">
       <img
         src={imgSrc}
         className={`avatar ${format === 'square' ? 'square' : 'rounded-full'} w-32 h-32 border-3 border-white object-cover`}
         alt={descricao}
       />
     </div>
   );
  }  
