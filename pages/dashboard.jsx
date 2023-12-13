import Image from "next/image";
import styles from "../styles/Dashboard.module.css";
import { LiaTwitter } from "react-icons/lia";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <div className={`${styles.logo} `}>
              <Image
                className={styles.img}
                src="/img/featured1.png"
                alt=""
                height="45"
                width="45"
              />
              <span className={styles.navItem}>Admin</span>
            </div>
          </li>

          <li>
            <div className={styles.a}>
              <LiaTwitter className={styles.icons} />
              <span className={styles.navItem}>Menu</span>
            </div>
          </li>
          <li>
            <div className={styles.a}>
              <LiaTwitter className={styles.icons} />
              <span className={styles.navItem}>Orders</span>
            </div>
          </li>
          <li>
            <div className={styles.a}>
              <LiaTwitter className={styles.icons} />
              <span className={styles.navItem}>Add Menu</span>
            </div>
          </li>

          <li>
            <div className={`${styles.logout}`}>
              <LiaTwitter className={styles.icons} />
              <span className={styles.navItem}>Log out</span>
            </div>
          </li>
        </ul>
      </nav>

      <section className={styles.main}>
        <div className={styles.mainTop}>
          <h1>Attendance</h1>
        </div>

        <section className={styles.attendance}>
          <div className={styles.attendanceList}>
            <h1>Attendance List</h1>
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

export default Dashboard;
