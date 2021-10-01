import React, {Component, ErrorInfo} from 'react';

interface Props {
    name: string;
}

interface State {
    error?: any;
    errorInfo?: ErrorInfo;
}

/*
* 用于保存应用程序部件的错误边界包装器
* 包装段的名称，默认为“错误边界”
* */
class ErrorBoundary extends Component<Props,State> {
    state: State = {
        error: null,
    };

    componentDidCatch(error: any, errorInfo: ErrorInfo) {
        // 捕获下面任何组件中的错误，并使用错误消息重新渲染
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // 我们还可以在此处将错误消息记录到错误报告服务
    }

    render() {
        const {errorInfo} = this.state
        if (errorInfo) {
            // 错误路径
            const {error} = this.state;
            const {name = '误差边界'} = this.props;
            return (
                <div>
                    <h2>{name} -出了点问题</h2>
                    <details style={{whiteSpace:'pre-wrap'}} >
                        {error? error.toString() : null}
                        <br/>
                        {errorInfo?.componentStack}

                    </details>
                </div>
            );
        }

        // rsc
        return this.props.children;
    }

}

export default ErrorBoundary;
