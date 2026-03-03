
function TypingArea() {

  return (
    <>
        {/*Обгортка*/}
      <div className="bg-white max-w-2xl rounded-2xl p-10 shadow-xl transition-all hover:shadow-2xl">
          {/*Основний блок*/}
          <div className="p-8 border-b-2 border-black border-solid">
              <p>A plant is one of the most important living things that
                  develop on the earth and is made up of stems, leaves,
                  roots, and so on.Parts of Plants: The part of the plant
                  that developed beneath the soil is referred to as root
                  and the part that grows outside of the soil is known as shoot.
                  The shoot consists of stems, branches, leaves, fruits,
                  and flowers.Plants are made up of six main parts: roots, stems,
                  leaves, flowers, fruits, and seeds.</p>
          </div>
          {/*Функціональний блок*/}
          <div className="p-8 rounded-2xl flex flex-row gap-8 justify-between">
              <ul className="flex flex-row items-center gap-8">
                  <li className="flex flex-col items-center">
                      <p>Часу лишилось:</p>
                      <span className="font-bold">0</span>
                  </li>
                  <li className="flex flex-col items-center">
                      <p>Помилки:</p>
                      <span className="font-bold">0</span>
                  </li>
                  <li className="flex flex-col items-center">
                      <p>Слів на хв:</p>
                      <span className="font-bold">0</span>
                  </li>
              </ul>
              <button className="bg-blue-400 rounded-2xl p-6 pt-2 pb-2 text-white transition-all hover:bg-blue-500">Заново</button>
          </div>
      </div>
    </>
  )
}

export default TypingArea
