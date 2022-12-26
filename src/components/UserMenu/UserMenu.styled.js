import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserMenuText = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const UserMenuButton = styled.button`
  max-width: 130px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`;
