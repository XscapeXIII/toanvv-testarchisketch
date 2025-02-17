import { useEffect, useState } from 'react';

const useReloadConfirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ''; // Cho phép hiển thị thông báo xác nhận trước khi thoát khỏi trang
    };

    const handleUnload = () => {
      // Xử lý khi trang được reload
      setShowConfirmation(false); // Ẩn modal sau khi trang đã được reload
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  const handleConfirmReload = () => {
    setShowConfirmation(false);
    window.location.reload(); // Reload trang
  };

  return {
    showConfirmation,
    setShowConfirmation,
    handleConfirmReload,
  };
};

export default useReloadConfirmation;

// Sử dụng hook trong component
// const YourComponent: React.FC = () => {
//   const { showConfirmation, setShowConfirmation, handleConfirmReload } = useReloadConfirmation();

//   const handleReloadClick = () => {
//     setShowConfirmation(true); // Hiển thị modal xác nhận trước khi reload trang
//   };

//   return (
//     <div>
//       {/* Modal xác nhận reload */}
//       {showConfirmation && (
//         <div>
//           <h2>Xác nhận</h2>
//           <p>Bạn có muốn reload trang?</p>
//           <button onClick={handleConfirmReload}>Đồng ý</button>
//         </div>
//       )}

//       <button onClick={handleReloadClick}>Reload trang</button>
//     </div>
//   );
// };
