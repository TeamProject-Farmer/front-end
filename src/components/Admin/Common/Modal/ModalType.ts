export interface modalPropsList {
  id: number;
  modalClose: () => void;
}

export const TotalList = [
  '방문수',
  '구매건수',
  '누적구매액',
  '누적적립액',
  '계정상태',
];

export interface warningPropsList {
  title: string;
  content: string;
  modalOpen: number;
  modalClose: () => void;
}
