import "./Segmentation.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 세분화
import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";

// 비즈니스 제안 사례
import segmentation_img1 from "./business_img/segmentation1.png";
import segmentation_img2 from "./business_img/segmentation2.png";

const Segmentation = () => {
  return (
    <body className="segmentation">
      <div className="about_main">
        <h1 className="segmentation_main_title">고객 세분화</h1>
        <div className="segmentation_main_txt">
          고객을 공통된 특성을 가진 그룹으로 분류
          <br />
          구매 패턴, 검색 방법, 리뷰 여부 등으로 고객을 분류 하여 개인화된
          마케팅 전략 개발에 유용
        </div>

        <div className="segmentation_title">인공지능 기반 고객 그룹 세분화</div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation1
              data={segmentation1.data}
              layout={segmentation1.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            인공지능을 활용해 고객 특성을 2차원으로 단순화시켰습니다.
            <br />
            그래프에서는 고객들이 명확하게 구분되는 그룹으로 나뉘어 있는 것을 볼
            수 있습니다.
          </div>
        </div>

        <div className="segmentation_title">그룹별 특징</div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation2
              data={segmentation2.data}
              layout={segmentation2.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            <div>
              ➡&nbsp;그룹 1 : 개인화된 추천 빈도가 높고, 검색 횟수는 낮음
            </div>
            <div>
              ➡&nbsp;그룹 2 : 나이가 가장 어리고 고객 리뷰를 중요하게 생각하지
              않음
            </div>
            <div>
              ➡&nbsp;그룹 3 : 검색 횟수가 가장 높으며, 고객 리뷰를 중요하게
              생각하며 개인화된 추천 빈도와 장바구니 완성 빈도 낮음
              <br />
            </div>
            <div>
              ➡&nbsp;그룹 4 : 나이가 가장 많으며 개인화된 추천 빈도와 검색
              횟수가 낮고, 장바구니 사용빈도가 낮음
            </div>
          </div>
        </div>

        <div className="segmentation_title">
          제품 선택 방법에 따른 그룹의 특징
        </div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation3
              data={segmentation3.data}
              layout={segmentation3.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            3번 그룹의 고객들은 제품 선택 시 키워드와 태그 외 다른 방법을 주로
            활용하는 것으로 나타났습니다.
            <br />
            이를 통해 마케팅 전략이나 제품 추천 시 키워드와 태그 중심의 접근이
            필요함을 알 수 있습니다.
          </div>
        </div>
        <div className="segmentation_title">비즈니스 성공 사례</div>
        <br />
        <br />
        <figure>
          <img
            className="segmentation_img"
            src={segmentation_img1}
            alt="segmentation_img1"
          />
          <br />
          <figcaption>고객세분화 비즈니스 성공 사례 1</figcaption>
        </figure>
        <figure>
          <img
            className="segmentation_img"
            src={segmentation_img2}
            alt="segmentation_img2"
          />
          <figcaption>고객세분화 비즈니스 성공 사례 2</figcaption>
        </figure>
      </div>
    </body>
  );
};

export default Segmentation;
