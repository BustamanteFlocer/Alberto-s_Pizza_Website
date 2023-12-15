import styles from "../styles/Add.module.css";

const DeliveryButton = ({ setClose, setCash }) => {
  return (
    <div className={styles.wrap}>
      <div
        onClick={() => {
          setClose(false);
        }}
        className={styles.mainAddButton}
      >
        Cash on Delivery
      </div>
    </div>
  );
};

export default DeliveryButton;
