import React from 'react';

//===== Ресурсы =====//
import './QuestsData.scss';

const QuestsData = ({questsList}) => {
  return (
    <div className='QuestsData'>
      <div className="QuestsData__wrapper">
        <div className="QuestsData__container">
          <div className="QuestsData__content">
            <table className="QuestsData__table">
              <thead className="QuestsData__thead">
                <tr className="QuestsData__tr">
                  <th className="QuestsData__th">Название</th>
                  <th className="QuestsData__th">Тип награды</th>
                  <th className="QuestsData__th">Размер награды</th>
                  <th className="QuestsData__th">Тип задания</th>
                  <th className="QuestsData__th">Дата завершения</th>
                  <th className="QuestsData__th">Приоритет</th>
                  <th className="QuestsData__th">Сложность</th>
                  <th className="QuestsData__th">Статус</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestsData;