import styled from "styled-components";
import { palette } from "styled-theme";

const ReportWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid ${palette("border", 2)};

  .ovWidgetLabel {
    font-size: 21px;
    color: ${palette("text", 0)};
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 25px;
  }

  .ovReportsWidgetBar {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    .ovSingleProgressBar {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .ovDescription {
    font-size: 13px;
    color: ${palette("text", 2)};
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
`;

export { ReportWidgetWrapper };
