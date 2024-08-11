import Video from "./Video";
import Article from "./Article";
import NewPopularWrapper from "./NewPopularWrapper";

export default function List(props) {

    let Wrapper = null;

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                Wrapper = NewPopularWrapper(Video, item.views);
                return (
                    <Wrapper {...item}/>
                );

            case 'article':
                Wrapper = NewPopularWrapper(Article, item.views);
                return (
                    <Wrapper {...item} />
                );
        }
    });
};