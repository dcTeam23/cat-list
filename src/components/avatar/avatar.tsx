

export const Avatar = ({}) => {

   return (
   <fieldset className="half username-fieldset">
   <div className="account-avatar">
      <div className="account-avatar__field-wrap">
         <img src="https://gravatar.com/avatar/iniciais-do-nome.png" alt="User Avatar" className="rounded-full"/>
      </div>
   </div>
</fieldset>)
   
}


// export function avatar({ imgSrc, descricao, format }) {
//   if (format == "square") {
//     return `
//     <div class="container">
//       <img src="${imgSrc}" class="avatar square" alt="${descricao}" />
//     </div>
//     `;
//   } else {
//     return `
//     <div class="container">
//       <img src="${imgSrc}" class="avatar circle" alt="${descricao}" />
//     </div>
//     `;
//   }
// }

