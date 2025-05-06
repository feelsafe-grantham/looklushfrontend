import styles from "./PriceTable.module.css";
const PriceTabel = () => {
    const priceData = [
        {
            service: "Acne Star",
            marketPrice: "₹999",
            ourPrice: "₹699",
            diff: "₹300",
            value: "300+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Acne Star",
            marketPrice: "₹999",
            ourPrice: "₹699",
            diff: "₹300",
            value: "300+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment",
        },
    ];
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
                            Achivement{" "}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {priceData.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.tableData}>{item.service}</td>
                            <td className={styles.tableData}>{item.marketPrice}</td>
                            <td className={styles.tableData}>{item.ourPrice}</td>
                            <td className={styles.tableData}>{item.diff}</td>
                            <td className={`${styles.tableData} ${styles.value}`}>
                                {" "}
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