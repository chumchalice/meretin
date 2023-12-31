import { IIcons } from "../../Interface/Interface";

const Instagram: React.FC = ({ opacity = "" }: IIcons) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <path
          fill="#fff"
          d="M20.5 14.532c2.27 0 2.539.009 3.435.05 2.304.104 3.38 1.197 3.485 3.484.04.896.049 1.165.049 3.435s-.009 2.538-.05 3.434c-.105 2.285-1.178 3.38-3.484 3.485-.896.04-1.164.05-3.435.05-2.27 0-2.539-.01-3.435-.05-2.309-.106-3.38-1.204-3.484-3.485-.041-.896-.05-1.165-.05-3.435s.01-2.538.05-3.435c.106-2.286 1.179-3.38 3.484-3.484.897-.04 1.165-.049 3.435-.049Zm0-1.532c-2.308 0-2.598.01-3.504.051-3.087.142-4.803 1.854-4.944 4.944-.042.907-.052 1.197-.052 3.505s.01 2.598.051 3.505c.142 3.087 1.854 4.802 4.944 4.944.907.041 1.197.051 3.505.051s2.598-.01 3.505-.051c3.084-.142 4.804-1.854 4.943-4.944.042-.907.052-1.197.052-3.505s-.01-2.598-.051-3.504c-.139-3.084-1.854-4.803-4.944-4.944C23.099 13.01 22.809 13 20.5 13Zm0 4.135a4.365 4.365 0 1 0 0 8.73 4.365 4.365 0 0 0 0-8.73Zm0 7.198a2.833 2.833 0 1 1 0-5.666 2.833 2.833 0 0 1 0 5.666Zm4.538-8.39a1.02 1.02 0 1 0 0 2.041 1.02 1.02 0 0 0 0-2.04Z"
        />
        <rect
          width="39"
          height="39"
          x=".5"
          y=".5"
          opacity={opacity}
          stroke="#fff"
          rx="19.5"
        />
      </svg>
    </div>
  );
};
export default Instagram;
