import { PriceItem } from "@/lib/types";
import styles from "./PriceTable.module.css";
import Link from "next/link";
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
                <Link href={"/location"} className={styles.bookButton}>
                  {item.achievement}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PriceTabel;
