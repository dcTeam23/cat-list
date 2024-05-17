

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property { 'square' | 'circle' } AvatarProps.format - Formato do Avatar (Circular ou Quadrado)
 * @param {AvatarProps} props
 * @param props
 */


export function Avatar({ imgSrc, descricao, format }) {
     if (format == "square") {
     return (
       <div className="container flex justify-center items-center">
         <img src={imgSrc} className={`avatar ${format} w-32 h-32 border-3 border-white object-cover`} alt={descricao} />    
           </div>
     );
   }  if (format == "circle") {
     return (
       <div className="container flex justify-center items-center">
     <img src={imgSrc} className={`avatar ${format} w-32 h-32 rounded-full object-cover`} alt={descricao} />
     </div>
     );
   }
}
//** essa sujestão quebra o tailwind */
// }
// return (
//     <div className="container flex justify-center items-center">
//       <img
//         src={imgSrc}
//         className={`avatar ${format === 'square' ? 'square' : 'circle'} w-32 h-32 border-3 border-white object-cover`}
//         alt={descricao}
//       />
//     </div>
//   );