import { useState, useEffect } from "react";

const defaultSize = {
  length: 40,
  range: [1, 100],
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type ListType = Array<number>;

export default function SorterContainer() {
  const [currentSize, setCurrentSize] = useState(defaultSize);
  const [isRunning, setIsRunning] = useState(false);

  function getRandomList(): ListType {
    return Array.from(
      { length: currentSize.length },
      () =>
        Math.floor(
          Math.random() * (currentSize.range[1] - currentSize.range[0])
        ) + currentSize.range[0]
    );
  }

  const [currentList, setCurrentList] = useState<ListType>(getRandomList());

  async function bubbleSort(list: ListType) {
    setIsRunning(true);
    let len = list.length;
    let swapped = false;

    for (let i = 0; i < len; i++) {
      console.log(list[i]);

      for (let j = 0; j < len - i; j++) {
        if (list[j] > list[j + 1]) {
          let tmp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = tmp;
          await wait(50);
          setCurrentList([...list]);
          swapped = true;
        }
      }

      if (!swapped) {
        setIsRunning(false);
        return;
      }
    }
    setIsRunning(false);
  }

  async function selectionSort(list: ListType) {
    setIsRunning(true);
    let len = list.length;

    for (let i = 0; i < len; i++) {
      var min_index = i;

      for (let j = i + 1; j < len; j++) {
        if (list[j] < list[min_index]) {
          min_index = j;
        }
      }

      if (min_index !== i) {
        let tmp = list[i];
        list[i] = list[min_index];
        list[min_index] = tmp;
        await wait(50);
        setCurrentList([...list]);
      }
    }

    setIsRunning(false);
  }

  async function insertionSort(list: ListType) {
    setIsRunning(true);
    let len = list.length;

    for (let i = 1; i < len; i++) {
      let current = list[i];
      let j = i - 1;

      while (j > -1 && current < list[j]) {
        list[j + 1] = list[j];
        j--;
      }

      list[j + 1] = current;
      await wait(50);
      setCurrentList([...list]);
    }

    setIsRunning(false);
  }

  useEffect(() => {
    setCurrentList(getRandomList());
  }, [currentSize]);

  return (
    <>
      <section>
        {currentList.map((item, index) => (
          <div
            style={{
              height: `${item}%`,
            }}
            key={index}
          ></div>
        ))}
      </section>
      {!isRunning ? (
        <ul>
          <li>
            <button onClick={() => bubbleSort(currentList)}>Bubble Sort</button>
          </li>
          <li>
            <button
              onClick={() => {
                insertionSort(currentList);
              }}
            >
              Insertion Sort
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                selectionSort(currentList);
              }}
            >
              Selection Sort
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentList(getRandomList());
              }}
            >
              Randomise the Array
            </button>
          </li>
        </ul>
      ) : (
        <ul className="disabled">
          <li>
            <button>Bubble Sort</button>
          </li>
          <li>
            <button>Insertion Sort</button>
          </li>
          <li>
            <button>Selection Sort</button>
          </li>
          <li>
            <button>Randomise the Array</button>
          </li>
        </ul>
      )}
      <form>
        <label htmlFor="number">
          Change the length of the array
          <br />
          <span>(not stable on mobile)</span>
        </label>
        <input
          type="range"
          id="number"
          name="number"
          min="10"
          max="500"
          value={currentSize.length}
          onChange={(e) => {
            if (!isRunning)
              setCurrentSize({
                ...currentSize,
                length: parseInt(e.target.value),
              });
          }}
        />
      </form>
    </>
  );
}
