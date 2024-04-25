import Image from "next/image";
import styles from "./button-bar.module.css";

type ButtonBarProps = {
    left: () => void;
    right: () => void;
}

export default function ButtonBar({ left, right }: ButtonBarProps) {
    return (
        <div className={styles.buttons}>
            <button onClick={left}>
            <Image
                width={50}
                height={50}
                src="/static/images/chevron-right.svg"
                alt="Left arrow"
            />
            </button>
            <button onClick={right}>
            <Image
                width={50}
                height={50}
                src="/static/images/chevron-right.svg"
                alt="Right arrow"
            />
            </button>
        </div>
    )
}