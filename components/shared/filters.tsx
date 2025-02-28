import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props {
    className?: string;
}

export const Filtres: React.FC<Props> = ({ className }) => {
    return(
        <div>
            <Title text="Фильтрация" size="lg" className="font-bold"/>  
        <div>
      <FilterCheckbox value="1" text="Можно собирать"/>

        <FilterCheckbox value="2" text="Новинки"/>
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <input type="number" placeholder="0" min={0} max={5000}  />
                <input type="number" placeholder="5000" min={100} max={5000}  />
            </div>
        </div>
      
        </div>
        </div>
    );
}