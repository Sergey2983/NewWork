import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props {
    className?: string;
}

export const Filtres: React.FC<Props> = ({ className }) => {
    return (
        <div>
            <Title text="Фильтрация" size="lg" className="font-bold" />
            <div>
                <FilterCheckbox value="1" text="Можно собирать" />

                <FilterCheckbox value="2" text="Новинки" />
            </div>
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <input type="number" placeholder="0" min={0} max={5000} />
                    <input type="number" placeholder="5000" min={100} max={5000} />
                </div>
            </div>
            
            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моццарелла",
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: "3",
                    },
                    {
                        text: 'Соленые огурцы',
                        value: '4',
                    },
                    {
                        text: 'Курица',
                        value: '5',
                    },
                    {
                        text: 'Бекон',
                        value: '6'
                    },
                    {
                        text: 'Сало',
                        value: "7",
                    }

                ]}
                items={[
                    {
                        text: "Сырный соус",
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: "2",
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурцы',
                        value: '4',
                    },
                    {
                        text: 'Курица',
                        value: '5',
                    },
                    {
                        text: 'Бекон',
                        value: '6'
                    },
                    {
                        text: 'Сало',
                        value: "7",
                    }

                ]}
            />
        </div>


    );
}