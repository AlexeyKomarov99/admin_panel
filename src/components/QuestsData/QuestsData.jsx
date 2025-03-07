import React from 'react';

//===== Ресурсы =====//
import { RxCross1 as CrossIcon } from "react-icons/rx";
import { IoCheckmarkOutline as CheckIcon } from "react-icons/io5";

import './QuestsData.scss';


const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября']

const QuestsData = ({questsList}) => {
  
  
  const DateFormatting = (dateQuest) => {
    const day = Number.parseInt(dateQuest.toLocaleString().split('T')[0].split('-')[2]);
    const monthIndex = Number.parseInt(dateQuest.toLocaleString().split('T')[0].split('-')[1]);
    const month = months[monthIndex];
    const year = dateQuest.toLocaleString().split('T')[0].split('-')[0];
    return `${day} ${month} ${year}`
  }

  const PriorityFormatting = (priority) => {
    const priotityFormat = 
      priority === 0 ? 'Низкий' :
      priority === 1 ? 'Средний' :
      priority === 2 ? 'Высокий' : 'Неизвестен';
    return priotityFormat;
  }

  const DifficultyFormatting = (difficulty) => {
    const difficultyFormat = 
      difficulty === 0 ? 'Низкая' :
      difficulty === 1 ? 'Средняя' :
      difficulty === 2 ? 'Высокая' : 'Неизвестна';
    return difficultyFormat;
  }

  const RewardTypeFormatting = (rewardType) => {
    const rewardTypeFormat = 
      rewardType === 'points' ? 'Поинты' :
      rewardType === 'hearts' ? 'Сердца' :
      rewardType === 'energetics' ? 'Энергетики' : 'Неизвестно';
    return rewardTypeFormat;
  }

  return (
    <div className='QuestsData'>
      <div className="QuestsData__wrapper">
        <div className="QuestsData__container">
          <div className="QuestsData__content">

            <table className="QuestsData__table">
              <thead className="QuestsData__thead">
                <tr className="QuestsData__tr">
                  <th className="QuestsData__th">Название</th>
                  <th className="QuestsData__th">Название (eng)</th>
                  <th className="QuestsData__th">Описание</th>
                  <th className="QuestsData__th">Описание (eng)</th>
                  <th className="QuestsData__th">Вид награды</th>
                  <th className="QuestsData__th">Размер награды</th>
                  <th className="QuestsData__th">Дата завершения</th>
                  <th className="QuestsData__th">Приоритет</th>
                  {/* <th className="QuestsData__th">Сложность</th> */}
                  <th className="QuestsData__th">Дата добавления</th>
                  <th className="QuestsData__th">Ссылка</th>
                  <th className="QuestsData__th">Статус</th>
                  <th className="QuestsData__th">Действие</th>
                </tr>
              </thead>
              <tbody className="QuestsData__tbody">
                {questsList ? (
                  questsList.map((quest) => (
                    <tr key={quest.id} className="QuestsData__tr">
                      <td className="QuestsData__td">{quest.name}</td>
                      <td className="QuestsData__td">{quest.name_en}</td>
                      <td className="QuestsData__td">{quest.text}</td>
                      <td className="QuestsData__td">{quest.text_en}</td>
                      <td className="QuestsData__td">{RewardTypeFormatting(quest.reward_type)}</td>
                      <td className="QuestsData__td">{quest.reward_value}</td>
                      <td className="QuestsData__td">{quest.date_stop === null ? 'Бессрочно' : 'null'}</td>
                      <td className="QuestsData__td">{PriorityFormatting(quest.priority)}</td>
                      {/* <td className="QuestsData__td">{DifficultyFormatting(quest.difficulty)}</td> */}
                      <td className="QuestsData__td">{DateFormatting(quest.created_at)}</td>
                      <td className="QuestsData__td">{quest.link}</td>
                      <td className="QuestsData__td">{quest.active ? 'Активна' : 'Завершена'}</td>
                      <td className="QuestsData__td QuestsData__icon-group">
                        <CheckIcon className='icon check' />
                        <CrossIcon className='icon cross' />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="QuestsData__tr">
                    <td colSpan="13" className="QuestsData__td">
                      Массив пуст
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestsData;