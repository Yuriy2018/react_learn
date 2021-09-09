import s from './LayoutBlock.css'

const LayoutBlock = (props) => {
 return   (
        <section className={s.root}>
            <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    <h3>{props.title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={`{${s.desc}, ${s.full}`}>
                    <p>{props.desc}</p>
                </div>
            </article>
            </div>
        </section>
    );
}
export default LayoutBlock;