"use client";
import { useState } from "react";
import styles from "./Faqs.module.css";
import { CiSearch } from "react-icons/ci";
import AccordionFaq from "../common/AccordiaFaq";
import useFaqs from "../common/Faqs/useFaqs";
import FaqCatShimmer from "../common/Loading/FaqCatShimmer";
import FaqAnsShimmer from "../common/Loading/FaqAnsShimmer";

const Faqs = () => {
  const [query, setQuery] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery("");
  };

  const {
    loading,
    faqCategories,
    setActiveCategory,
    activeCategory,
    activeQuestion,
    setActiveQuestion,
  } = useFaqs();
  return (
    <div className={styles.faqContainer}>

      <div className={`${styles.faqSearchBarContainer}`}>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.faqSearchBarWrapper}`}>
            <CiSearch size={25} className={`${styles.faqSearchIcon}`} />
            <input
              type="text"
              value={query}
              placeholder="Search your queries.."
              className={`${styles.faqSearchBar}`}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className={`${styles.faqSearchButton}`} type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className={`${styles.faqProblemContainer}`}>
        {loading ? (
          <FaqCatShimmer />
        ) : (
          faqCategories.map((faqCat) => (
            <div
              key={faqCat.id}
              onClick={() => {
                setActiveCategory(faqCat.id);
              }}
              className={styles.iconWrapper}
            >
              <div className={styles.imageContainer}>
                <img src={faqCat.image} className={styles.faqImage} />
                <img
                  src="/images/faq-border-temp.png"
                  alt={faqCat.text}
                  className={styles.border}
                />
              </div>
              <p className={styles.label}>{faqCat.text}</p>
            </div>
          ))
        )}
      </div>
      {loading ? (
        <FaqAnsShimmer />
      ) : (
        <div className={`${styles.qnaContainer}`}>
          <ul className={`${styles.questionsContainer} scrollbar-hide`}>
            {activeCategory?.faqs.map((item, index) => (
              <li
                key={index}
                className={styles.card}
                onClick={() => {
                  setActiveQuestion(item.id);
                }}
              >
                <span className={styles.number}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <p className={styles.text}>{item.question}</p>
              </li>
            ))}
          </ul>
          <div className={`${styles.answerContainer}`}>
            <p className={`${styles.answer} scrollbar-hide`}>
              {activeQuestion?.answer}
            </p>
            <img
              className={`${styles.qnaImage}`}
              src="/images/qnaImage.gif"
              alt="qna image"
            />
          </div>
        </div>
      )}
      <div className={`${styles.qnaMobileContainer}`}>
        <AccordionFaq qna={activeCategory?.faqs} />
      </div>
    </div>
  );
};
export default Faqs;
