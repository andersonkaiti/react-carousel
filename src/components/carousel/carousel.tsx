import Image from "next/image";
import styles from "./carousel.module.css";
import { type ItemType } from "../services/shoes-services"

type CarouselProps = {
    data: ItemType[];
    reference: React.RefObject<HTMLDivElement>;
}

export default function Carousel({ data, reference }: CarouselProps) {
    console.log(data);
    return (
        <div
            className={styles.carousel}
            ref={reference}
        >
            {
            data.map((item: ItemType) => {
                return (
                <div
                    className={styles.item}
                    key={item.id}
                >
                    <div className={styles.image}>
                    <Image
                        width={200}
                        height={200}
                        src={item.image}
                        alt={item.name}
                    />
                    </div>
                    <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.oldPrice}>US$ {item.oldPrice}</div>
                    <div className={styles.price}>US$ {item.price}</div>
                    </div>
                </div>
                );
            })
            }
        </div>
    )
}