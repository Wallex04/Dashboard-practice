// import { MODAL_BODY_TYPES } from '../../utils/globalConsult';
// import { useSelector, useDispatch } from 'react-redux';
// import { closeModal } from '../../redux/features/modalSlice';
// import CreateAdmin from '../modal/CreateAdmin';


// function ModalLayout() {
//   const { isOpen, bodyType, size, extraObject, title } = useSelector((state) => state.modal);
//   const dispatch = useDispatch();

//   const close = (e) => {
//     dispatch(closeModal(e));
//   };


//   return (
//     <>
//       {/* Put this part before </body> tag */}
//       <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
//         <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : 'max-w-[50rem]'} dark:bg-white`}>
//           <button className="btn btn-circle btn-sm absolute right-2 top-2" onClick={() => close()}>
//             ✕
//           </button>
//           <h3 className="pb-6 text-center text-2xl font-semibold">{title}</h3>
//           {/* Loading modal body according to different modal type */}
//           {
//             {
//               [MODAL_BODY_TYPES.FOUNDER_MODAL]: 
//               <CreateAdmin extraObject={extraObject} closeModal={close} />,
             
//               [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
//             }[bodyType]
//           }
//         </div>
//       </div>
//     </>
//   );
// }

// export default ModalLayout;
