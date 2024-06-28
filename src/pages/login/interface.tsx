export interface LoginProps {
    onLogin: () => void
    onRegister: () => void
    onForgotPassword: () => void
    onResetPassword: () => void
    onBack: () => void
    preventDefault: () => void;
}