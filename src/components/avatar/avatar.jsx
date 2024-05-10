import "./avatar.css"

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property { 'square' | 'circle' } AvatarProps.format - Formato do Avatar (Circular ou Quadrado)
 * @param {AvatarProps} props
 * @param props
 */
// export const Avatar = ({ }) => {

//    return (
//       <fieldset className="half username-fieldset">
//          <div className="account-avatar">
//             <div className="account-avatar__field-wrap">
//                <img src="https://gravatar.com/avatar/iniciais-do-nome.png" alt="User Avatar" className="rounded-full" />
//             </div>
//          </div>
//       </fieldset>)

// }


export function Avatar({ imgSrc, descricao, format }) {
  if (format === "square") {
    return (
      <div className="container">
        <img src={imgSrc} className="avatar square" alt={descricao} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <img src={imgSrc} className="avatar circle" alt={descricao} />
      </div>
    );
  }
}

// export function Avatar({ imgSrc, descricao, format }) {
//    if (format == "square") {
//       return `
//      <div class="container">
//        <img src="${imgSrc}" class="avatar square" alt="${descricao}" />
//      </div>
//      `;
//    } else {
//       return `
//      <div class="container">
//        <img src="${imgSrc}" class="avatar circle" alt="${descricao}" />
//      </div>
//      `;
//    }
// }

