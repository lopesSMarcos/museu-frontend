
import { usePagination, DOTS } from "./usePagination";
import { IPagination } from "../../types/interfaces";
import styles from './Pagination.module.css'

const Pagination = ( props : IPagination) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    }) ?? [];

    // Se houver menos que 2 vezes no intervalo de paginação, não renderizamos o componente
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (onPageChange) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (onPageChange) {
            onPageChange(currentPage - 1);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={styles.corposeta}
        >
            {/* Seta de navegação da esquerda */}
            <li
                className={styles.item}
                onClick={onPrevious}
            >
                <div className={styles.esquerda} />
            </li>
            {paginationRange.map(pageNumber => {
               
                // Se o pageItem for um PONTO (DOT), renderize o caractere unicode DOTS
                if (pageNumber === DOTS) {
                    return <li className={styles.dots}>&#8230;</li>;
                }

                
                return (
                    <li
                        className={ pageNumber === currentPage ? styles.numbers : styles.selecionado}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Seta de navegação da direita */}
            <li
                className={currentPage === lastPage ? styles.ultimoitem : styles.item}
                onClick={onNext}
            >
                <div
                   className={styles.direita}
                />
            </li>
        </ul>
    );
};

export default Pagination;