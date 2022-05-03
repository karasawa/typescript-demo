import React, {memo} from 'react';

interface Props {
    test: String;
    object: {
        name: String;
        age: Number;
    }
}

const Sample: React.VFC<Props> = memo(({test, object}) => {

    console.log(object);
    return(
        <>{test}</>
    );
});
export default Sample;