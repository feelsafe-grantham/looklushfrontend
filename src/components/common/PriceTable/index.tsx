import { PriceItem } from "@/lib/types";
import styles from "./PriceTable.module.css";
// const priceData2: PriceItem[] = [
//     {
//         service: "Acne Star",
//         market_price: "₹999",
//         our_price: "₹699",
//         diff: "₹300",
//         value: "300+ Customers",
//         achievement: "Book Appointment",
//     },
//     {
//         service: "Glow Facial",
//         market_price: "₹1200",
//         our_price: "₹850",
//         diff: "₹350",
//         value: "500+ Customers",
//         achievement: "Book Appointment",
//     },
//     {
//         service: "Hair Spa",
//         market_price: "₹1500",
//         our_price: "₹999",
//         diff: "₹501",
//         value: "250+ Customers",
//         achievement: "Book Appointment",
//     },
//     {
//         service: "Acne Star",
//         market_price: "₹999",
//         our_price: "₹699",
//         diff: "₹300",
//         value: "300+ Customers",
//         achievement: "Book Appointment",
//     },
//     {
//         service: "Glow Facial",
//         market_price: "₹1200",
//         our_price: "₹850",
//         diff: "₹350",
//         value: "500+ Customers",
//         achievement: "Book Appointment",
//     },
//     {
//         service: "Hair Spa",
//         market_price: "₹1500",
//         our_price: "₹999",
//         diff: "₹501",
//         value: "250+ Customers",
//         achievement: "Book Appointment",
//     },
// ];
const PriceTabel = ({ priceData }: { priceData: PriceItem[] }) => {
  return (
    <div className={`${styles.priceTableContainer}`}>
      <table className={`${styles.priceTable}`}>
        <thead>
          <tr className={`  ${styles.tableHeaderRow}`}>
            <th className={` ${styles.topLeftRadius} ${styles.tableHeader}`}>
              Service
            </th>
            <th className={`${styles.tableHeader}`}>Market Price</th>
            <th className={`${styles.tableHeader}`}>Our Price </th>
            <th className={`${styles.tableHeader}`}>Diff </th>
            <th className={`${styles.tableHeader}`}>Value </th>
            <th className={`${styles.topRightRadius} ${styles.tableHeader}`}>
              Achivement
            </th>
          </tr>
        </thead>
        <tbody>
          {priceData.map((item, index) => (
            <tr key={index}>
              <td className={styles.tableData}>{item.service}</td>
              <td className={styles.tableData}>{item.market_price}</td>
              <td className={styles.tableData}>{item.our_price}</td>
              <td className={styles.tableData}>{item.diff}</td>
              <td className={`${styles.tableData} ${styles.value}`}>
                {item.value.split(" ")[0]}
                <br />
                {item.value.split(" ").slice(1).join(" ")}
              </td>
              <td className={styles.tableData}>
                <button className={styles.bookButton}>
                  {item.achievement}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PriceTabel;
