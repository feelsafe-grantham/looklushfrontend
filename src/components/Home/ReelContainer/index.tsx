import ReelCard from "../ReelCard";
import styles from "./ReelContainer.module.css"
export interface ReelType {
    username: string;
    viewers: number;
    comments: { user: string; message: string }[];
    videoUrl: string;
    fallbackImage: string;
}
async function fetchReels(): Promise<ReelType[]> {
    // Replace with your actual backend or API call
    return [
        {
            username: "amanpandey_11",
            viewers: 120,
            comments: [
                { user: "freyjalalila_", message: "OMG 😳😳😳" },
                { user: "user420", message: "awesome 👍" },
                { user: "catlover88", message: "this is so wholesome 🐱" },
            ],
            videoUrl: "/videos/reel.mp4",
            fallbackImage: "",
        },
        {
            username: "_aman11",
            viewers: 120,
            comments: [
                { user: "freyjalalila_", message: "OMG 😳😳😳" },
                { user: "user420", message: "awesome 👍" },
                { user: "catlover88", message: "this is so wholesome 🐱" },
            ],
            videoUrl: "/videos/reel.mp4",
            fallbackImage: "",
        },
        {
            username: "_aman11",
            viewers: 120,
            comments: [
                { user: "freyjalalila_", message: "OMG 😳😳😳" },
                { user: "user420", message: "awesome 👍" },
                { user: "catlover88", message: "this is so wholesome 🐱" },
            ],
            videoUrl: "/videos/reel.mp4",
            fallbackImage: "",
        },
    ];
}
const ReelContainer = async () => {
    const Reel = await fetchReels();

    return (
        <div className={`${styles.reelWrapper}`}>
            <div className={`${styles.reelContainer}`}>
                {Reel.map((reel, index) => <ReelCard key={index} Reel={reel} />)}
            </div>
        </div>
    )
}
export default ReelContainer;