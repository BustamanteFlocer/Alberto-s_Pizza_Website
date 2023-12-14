import Image from "next/image";
import styles from "../styles/AdminAdd.module.css";
import NavAdmin from "./NavAdmin";

const AdminAdd = () => {
  return (
    <div className={styles.container}>
      <NavAdmin />
      <section className={styles.main}>
        <div className={styles.mainTop}>
          <h1>Add Menu</h1>
        </div>
        <section className={styles.attendance}>
          <div className={styles.attendanceList}>
            <h1>Add Menu</h1>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Depart</th>
                  <th>Date</th>
                  <th>Join Time</th>
                  <th>Logout Time</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Sam David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr className={styles.active}>
                  <td>02</td>
                  <td>Balbina Kherr</td>
                  <td>Coding</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Badan John</td>
                  <td>testing</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Sara David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Salina</td>
                  <td>Coding</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Tara Smith</td>
                  <td>Testing</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AdminAdd;
