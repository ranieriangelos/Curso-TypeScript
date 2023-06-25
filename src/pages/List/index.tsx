import React, {useMemo, useState, useEffect} from 'react';
import {Container, Content, Filters} from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router-dom';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';



interface IRouteParams{
    match:{
        params:{
            type: string;
        }
    }
}

interface IData{
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dataFormated: string;
    tagColor: string;
}

const List: React.FC = ({}) => {

    const [data, setData] = useState<IData[]>([]);

    const { type } = useParams<{ type: string }>();

    const title = useMemo(() => {
      return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
      }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
      }, [type]);

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'},
         
    ];
    const years = [
        {value: 2023, label: '2023'},
        {value: 2022, label: '2022'},
        {value: 2020, label: '2020'},
        {value: 2021, label: '2021'},
    ];

    useEffect(() =>{
       const response = listData.map(item =>{
            return{
                id: String (Math.random() * data.length),
                description: item.description,
                amountFormated: item.amount,
                frequency: item.frequency,
                dataFormated: item.date,
                tagColor: '#4E41F0'
            }
        })
        setData(response);
    },[]);

    return(
        <Container>
            <ContentHeader title={title} lineColor={lineColor} >
                <SelectInput options={months}/>
                <SelectInput options={years}/>

            
            </ContentHeader>

          
            <Filters>
                <button type="button"
                className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button type="button"
                className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>
            <Content>
                {
                    data.map(item =>(
                        <HistoryFinanceCard 
                        key= {item.id}
                        tagColor={item.tagColor} 
                        title={item.description}
                        subtitle={item.dataFormated}
                        amount={item.amountFormated} 
                        children={undefined} />
                    ))    
                }
            </Content>
        </Container>
    );
}

export default List;