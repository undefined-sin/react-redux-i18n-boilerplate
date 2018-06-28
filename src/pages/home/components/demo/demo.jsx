import React, { Component } from 'react';
import BackToTop from '@basepath/components/backtotop/backtotop';
import TagGroup from '@basepath/components/taggroup/taggroup';

class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = { tags: [{title: '-500 bis 0 EUR'},
                              {title: 'Lastschriften'},
                              {title: 'Kartenzahlungen'},
                              {title: 'Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},
                              {title: 'XX'},
                              {title: 'Clear All'},
                             ]
                     };

        this.addNewTag = this.addNewTag.bind(this);
    }

    handleDelete(event, i) {
        const { tags } = this.state;

        this.setState({ tags: tags.filter((tag, index) => index !== event) });
    }

    handleAddition(tag) {
        const newTags = this.state.tags.slice(0);
        newTags.splice(newTags.length-1, 0, tag);

        this.setState({ tags: newTags });
    }

    addNewTag() {
        if (this.refs.tagTxtInput !== null) {
            const input = this.refs.tagTxtInput;
            const value = input.value;
            if (value && value.trim() !== "") {
                const newTag = { title: value };
                this.handleAddition(newTag);
                input.value = "";
            }
        }
    }

    render() {
        const tags = this.state.tags;
        return (
                        <div id="Demo">
                            <div id="transactionFilterBadges">
                                <TagGroup tags={tags}
                                          handleDelete={this.handleDelete.bind(this)}
                                          handleAddition={this.handleAddition.bind(this)}
                                />
                            </div>

                            <div>
                              Tag: <input type="text" ref="tagTxtInput"/>
                              <button onClick={this.addNewTag}>Add tag</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus ullamcorper lectus id lobortis. Nunc tempus id dui dapibus placerat. Aliquam erat volutpat. Nulla at diam molestie, sagittis tortor eu, lobortis diam. Sed vel posuere diam, ac volutpat elit. Cras aliquet nisi arcu, laoreet eleifend quam laoreet ac. Nunc auctor posuere velit. Duis sem eros, mattis vitae placerat nec, ornare vitae neque. Phasellus nulla nulla, porttitor non metus at, accumsan venenatis velit. Morbi viverra est lectus. Vestibulum ultricies maximus finibus. Pellentesque sit amet lorem ligula. Nam suscipit maximus odio, imperdiet molestie nulla maximus id. Mauris vitae urna dolor. Sed elementum lacinia sapien et tincidunt.
            Sed imperdiet felis lorem, eget cursus orci consequat et. Praesent magna ante, mollis a convallis at, fringilla ac mi. Phasellus at eleifend est, eget varius enim. In dignissim nisi ut nisi imperdiet hendrerit. Curabitur aliquet turpis ac sapien sollicitudin eleifend. Sed nec risus dictum, ornare metus vel, semper ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Quisque sagittis nisl eget volutpat vehicula. Pellentesque ac libero nulla. Nunc consequat nisl quis fermentum porta. Nullam hendrerit varius libero, sed venenatis lacus bibendum non. Quisque eu nisl at quam suscipit aliquam. Cras non consectetur lectus, vitae ullamcorper leo. Curabitur efficitur vel urna eu tristique. Morbi ut nibh urna.

            Nulla placerat imperdiet vehicula. Morbi vulputate lorem vitae urna mattis, non facilisis orci porttitor. Nunc eu nunc et sem imperdiet dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse eget accumsan lorem. Aenean dignissim neque nisi, ac accumsan ex vestibulum id. Pellentesque quis posuere tortor. Nunc varius rhoncus mattis. Vestibulum at rhoncus lorem. Aliquam facilisis commodo semper. Pellentesque sed fermentum orci, ac faucibus eros.

            Integer vitae varius mi. Duis lobortis risus vitae vestibulum egestas. Suspendisse vestibulum augue eu vehicula blandit. Integer commodo velit nec libero aliquam dignissim. Mauris euismod sed erat in ornare. Nullam sed risus dictum, egestas nisl in, interdum tellus. Suspendisse vel varius orci. Vestibulum vel scelerisque nulla. Sed cursus tristique sapien, a pulvinar libero interdum sit amet.

            Phasellus at massa non ex suscipit lacinia et vel quam. Cras at dignissim orci. Etiam euismod egestas tellus. Pellentesque dictum augue ut tincidunt tempor. Sed et turpis et justo finibus interdum a ac lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nisl turpis, lobortis sit amet magna in, efficitur varius elit.

            Donec porttitor euismod ipsum quis vehicula. Nunc dictum accumsan dapibus. Mauris ut nunc tempor, fringilla eros eget, eleifend orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris imperdiet posuere lacus at sodales. Mauris consectetur tellus tortor, nec ultricies urna ornare vitae. Donec aliquet ac enim a consequat. Phasellus rhoncus urna ac arcu tincidunt, varius congue nisi ullamcorper. Proin bibendum lacus consectetur augue ultrices mattis. Suspendisse et nibh scelerisque, ullamcorper magna id, eleifend est. Vivamus malesuada ante ac sapien euismod, a ullamcorper eros pellentesque. Curabitur nec arcu nunc. Donec lobortis dignissim libero in hendrerit.

            Suspendisse massa eros, dignissim a turpis vitae, interdum molestie nunc. Suspendisse ornare tristique metus non luctus. Vivamus at felis ut mauris interdum auctor nec ut purus. Vestibulum varius leo elit, sed sagittis tellus scelerisque sed. Aliquam gravida cursus eros, nec molestie sapien sagittis sit amet. Aenean laoreet diam euismod, ornare erat non, malesuada lectus. Sed scelerisque odio ut massa consectetur accumsan. Quisque dictum porta magna sed maximus. Ut sed elementum leo, vel lobortis mauris. Suspendisse quis orci et mi gravida iaculis sed sed magna. Sed sodales quam ante, non aliquet ligula tincidunt eu. Aliquam maximus sapien ultrices, volutpat enim id, bibendum diam. Ut venenatis pulvinar odio et accumsan.

            Nullam aliquet, mauris ut vehicula venenatis, nunc tortor rhoncus mauris, in pharetra arcu neque vehicula enim. Suspendisse pellentesque dolor ut lectus ornare lacinia eget vel tortor. Nam dignissim tempus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eget metus tempor, dignissim nunc at, suscipit massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet porttitor lectus sed fringilla. Sed facilisis porta leo id pellentesque. Vestibulum sit amet justo rutrum erat posuere congue.

            Mauris vel nunc consequat, facilisis nibh et, eleifend massa. Sed in pretium neque. Sed fringilla egestas urna sit amet interdum. Proin auctor ligula at arcu vulputate, ut iaculis turpis consequat. Donec non varius sem. Proin et dui a dolor tempus tincidunt. Suspendisse libero eros, malesuada sit amet nisi ut, tempor suscipit velit. In eget feugiat felis, quis ornare ipsum. Donec id massa sem. Sed vitae tincidunt dolor, ac faucibus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta nisi eu libero placerat, pulvinar laoreet neque vestibulum. In pulvinar elementum nisl vitae sagittis.

            Praesent lorem quam, suscipit id elit id, facilisis feugiat magna. Aliquam nunc magna, tincidunt tincidunt risus et, rhoncus iaculis magna. Aenean tristique tincidunt ullamcorper. Aenean interdum nibh felis, sit amet fermentum lacus sollicitudin at. Nunc non semper nisl, quis tincidunt turpis. Maecenas aliquam enim quis ex vehicula, pulvinar ultricies nisl finibus. Maecenas elit dolor, euismod at mattis eget, tempus id ante. Nulla sit amet nulla in lectus vulputate pretium. Donec urna libero, tristique id mollis interdum, gravida vel nisi. Nam lacinia convallis lacus vitae volutpat. Cras eu dui lacus. Fusce vulputate, eros luctus elementum commodo, dolor eros iaculis justo, eget ornare neque urna quis eros. Morbi porttitor fermentum fermentum. Donec molestie risus sit amet convallis laoreet.

            Fusce augue diam, fermentum sed nunc et, posuere fermentum neque. Etiam tincidunt, metus quis aliquet accumsan, arcu nibh vestibulum massa, sit amet convallis tellus eros sit amet velit. Suspendisse in cursus metus, id gravida massa. Quisque laoreet molestie ultrices. Aliquam non sapien nisi. Praesent a consequat felis. Phasellus sagittis placerat odio eget mollis.

            Ut nec ullamcorper turpis. Proin ultricies posuere euismod. Sed volutpat volutpat sem, nec feugiat arcu elementum quis. Maecenas varius mi sem, vel accumsan quam luctus et. Vivamus id lectus euismod, hendrerit justo et, volutpat justo. Pellentesque vitae eros diam. Phasellus nec neque vitae ipsum aliquam scelerisque. Phasellus gravida, ipsum quis auctor congue, mi quam porta urna, id dapibus odio libero eget orci. Donec congue, mi eu consectetur sodales, augue nulla molestie elit, et venenatis justo dolor sed massa. Cras id metus vel ante pulvinar viverra.

            Sed feugiat pellentesque bibendum. In a enim vel ex interdum varius at eu nulla. Integer arcu neque, maximus nec tincidunt a, lobortis a turpis. Cras in molestie risus. Vivamus nec dolor rhoncus, vulputate purus ut, commodo ante. Nam in dignissim lacus, vitae aliquam magna. Sed porta dictum commodo. Aenean interdum, massa eget malesuada placerat, sapien elit facilisis sapien, id efficitur turpis libero sit amet ante. Maecenas vitae rutrum nulla. Ut id nisl vitae nisl tempor pharetra vel vel arcu.

            Donec vitae tempor ante. Ut convallis sit amet nunc a rhoncus. Praesent commodo lectus non ante maximus, sit amet dignissim lacus pulvinar. Donec et purus vitae augue tincidunt aliquet ut eget lectus. Nunc lacinia turpis nec enim feugiat maximus. Duis molestie viverra fermentum. Mauris non urna nec elit viverra placerat a in ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis congue erat, eget lobortis ligula.

            Proin suscipit diam sed gravida convallis. Pellentesque odio tortor, volutpat eget fermentum a, congue eu diam. Curabitur dapibus justo eget mi ullamcorper auctor. Duis dolor libero, fermentum vel quam eu, consectetur ullamcorper augue. Pellentesque maximus malesuada odio, ut mollis nisl lacinia sed. Nulla fringilla dolor eu est placerat, et tempor nisi tristique. Cras luctus enim vitae arcu pharetra consectetur. Mauris bibendum enim dui, et euismod massa tempor nec. Mauris interdum purus id consectetur finibus. Etiam felis arcu, fringilla nec dapibus vitae, tristique quis est. Nulla semper nisi a neque accumsan rhoncus. Mauris et augue lobortis, pharetra diam consequat, sollicitudin sem. Morbi luctus leo mollis, venenatis est eu, eleifend sem. Suspendisse non molestie nulla, rutrum commodo libero.

            Fusce consequat consequat malesuada. Nam pulvinar ex vitae est ornare laoreet. Phasellus consequat nisi ac quam convallis tempor. Curabitur iaculis lacus vel pretium condimentum. Morbi id semper ligula, non molestie tortor. Nullam id pellentesque orci, vitae tristique odio. Suspendisse sed facilisis nisl. Nulla consectetur semper magna, ac ultricies justo gravida nec. Curabitur bibendum eleifend eros non tempus. Fusce nec urna porta, congue ligula id, commodo dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

            Sed fringilla neque et faucibus iaculis. Sed mi ex, vestibulum sed vulputate ut, tristique ac felis. Quisque at mi eros. Quisque a ligula in orci auctor ullamcorper vel fringilla leo. Vivamus bibendum, est sit amet dignissim tincidunt, ligula eros suscipit urna, non vestibulum quam sem quis urna. Ut tempus mollis vestibulum. Cras vestibulum tortor vel erat interdum, vitae tristique arcu ornare. Etiam viverra augue eget nibh scelerisque dignissim.

            Nam at finibus elit. In ut sapien nec nulla porttitor iaculis. Ut arcu ligula, dignissim at erat vitae, facilisis congue lorem. Duis dictum eu leo ut eleifend. Integer maximus ligula at imperdiet cursus. Sed a erat scelerisque, tempor lectus a, maximus augue. Nam lacinia sed lectus at ullamcorper. Vivamus et sodales velit. Vestibulum in tellus mi.

            Nullam non quam et nisl convallis elementum ut at metus. Aliquam mattis ultrices egestas. Morbi at mauris nisi. Sed sed tellus porta, viverra lacus sit amet, pellentesque enim. Nullam ullamcorper condimentum convallis. Vivamus accumsan ipsum ex, eu accumsan nulla volutpat sit amet. Vivamus pharetra aliquet est id sollicitudin. Donec commodo metus ipsum, ac imperdiet nibh sollicitudin sed. Praesent porttitor mauris nisl, quis feugiat lorem placerat quis. Pellentesque at tortor lectus. Morbi molestie pharetra arcu, nec rhoncus felis suscipit ac.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut mattis lorem condimentum eros accumsan imperdiet. Nunc auctor, odio et luctus egestas, tellus arcu mattis orci, ullamcorper egestas diam mauris non nulla. Vestibulum egestas mi vitae ultricies efficitur. Donec vestibulum augue risus. Maecenas in felis convallis, laoreet tortor in, gravida magna. Aliquam volutpat ornare imperdiet. Fusce pellentesque nisi sed magna accumsan faucibus. Nunc auctor ac neque a eleifend. Sed aliquet sapien vitae enim vehicula sodales. Etiam ac elit pharetra, iaculis justo at, suscipit quam.

            Sed efficitur dictum est at mattis. Proin eu diam sit amet eros laoreet scelerisque. Mauris volutpat enim id lacus varius, in hendrerit ipsum venenatis. Cras sollicitudin fringilla quam, at vehicula erat laoreet a. Nam vitae lacinia dolor. Donec vel faucibus massa, faucibus blandit diam. Suspendisse volutpat, eros ac interdum consequat, odio mi gravida mauris, non gravida turpis diam vel risus. Vivamus quis augue a libero fermentum semper in vitae dolor. Nunc vitae nibh eget tellus sagittis condimentum. Duis id auctor turpis, ut suscipit odio. Quisque vehicula egestas dolor vitae volutpat. Suspendisse venenatis dolor ut elit porta lobortis eget ut diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus ullamcorper lectus id lobortis. Nunc tempus id dui dapibus placerat. Aliquam erat volutpat. Nulla at diam molestie, sagittis tortor eu, lobortis diam. Sed vel posuere diam, ac volutpat elit. Cras aliquet nisi arcu, laoreet eleifend quam laoreet ac. Nunc auctor posuere velit. Duis sem eros, mattis vitae placerat nec, ornare vitae neque. Phasellus nulla nulla, porttitor non metus at, accumsan venenatis velit. Morbi viverra est lectus. Vestibulum ultricies maximus finibus. Pellentesque sit amet lorem ligula. Nam suscipit maximus odio, imperdiet molestie nulla maximus id. Mauris vitae urna dolor. Sed elementum lacinia sapien et tincidunt.

            Sed imperdiet felis lorem, eget cursus orci consequat et. Praesent magna ante, mollis a convallis at, fringilla ac mi. Phasellus at eleifend est, eget varius enim. In dignissim nisi ut nisi imperdiet hendrerit. Curabitur aliquet turpis ac sapien sollicitudin eleifend. Sed nec risus dictum, ornare metus vel, semper ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Quisque sagittis nisl eget volutpat vehicula. Pellentesque ac libero nulla. Nunc consequat nisl quis fermentum porta. Nullam hendrerit varius libero, sed venenatis lacus bibendum non. Quisque eu nisl at quam suscipit aliquam. Cras non consectetur lectus, vitae ullamcorper leo. Curabitur efficitur vel urna eu tristique. Morbi ut nibh urna.

            Nulla placerat imperdiet vehicula. Morbi vulputate lorem vitae urna mattis, non facilisis orci porttitor. Nunc eu nunc et sem imperdiet dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse eget accumsan lorem. Aenean dignissim neque nisi, ac accumsan ex vestibulum id. Pellentesque quis posuere tortor. Nunc varius rhoncus mattis. Vestibulum at rhoncus lorem. Aliquam facilisis commodo semper. Pellentesque sed fermentum orci, ac faucibus eros.

            Integer vitae varius mi. Duis lobortis risus vitae vestibulum egestas. Suspendisse vestibulum augue eu vehicula blandit. Integer commodo velit nec libero aliquam dignissim. Mauris euismod sed erat in ornare. Nullam sed risus dictum, egestas nisl in, interdum tellus. Suspendisse vel varius orci. Vestibulum vel scelerisque nulla. Sed cursus tristique sapien, a pulvinar libero interdum sit amet.

            Phasellus at massa non ex suscipit lacinia et vel quam. Cras at dignissim orci. Etiam euismod egestas tellus. Pellentesque dictum augue ut tincidunt tempor. Sed et turpis et justo finibus interdum a ac lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nisl turpis, lobortis sit amet magna in, efficitur varius elit.

            Donec porttitor euismod ipsum quis vehicula. Nunc dictum accumsan dapibus. Mauris ut nunc tempor, fringilla eros eget, eleifend orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris imperdiet posuere lacus at sodales. Mauris consectetur tellus tortor, nec ultricies urna ornare vitae. Donec aliquet ac enim a consequat. Phasellus rhoncus urna ac arcu tincidunt, varius congue nisi ullamcorper. Proin bibendum lacus consectetur augue ultrices mattis. Suspendisse et nibh scelerisque, ullamcorper magna id, eleifend est. Vivamus malesuada ante ac sapien euismod, a ullamcorper eros pellentesque. Curabitur nec arcu nunc. Donec lobortis dignissim libero in hendrerit.

            Suspendisse massa eros, dignissim a turpis vitae, interdum molestie nunc. Suspendisse ornare tristique metus non luctus. Vivamus at felis ut mauris interdum auctor nec ut purus. Vestibulum varius leo elit, sed sagittis tellus scelerisque sed. Aliquam gravida cursus eros, nec molestie sapien sagittis sit amet. Aenean laoreet diam euismod, ornare erat non, malesuada lectus. Sed scelerisque odio ut massa consectetur accumsan. Quisque dictum porta magna sed maximus. Ut sed elementum leo, vel lobortis mauris. Suspendisse quis orci et mi gravida iaculis sed sed magna. Sed sodales quam ante, non aliquet ligula tincidunt eu. Aliquam maximus sapien ultrices, volutpat enim id, bibendum diam. Ut venenatis pulvinar odio et accumsan.

            Nullam aliquet, mauris ut vehicula venenatis, nunc tortor rhoncus mauris, in pharetra arcu neque vehicula enim. Suspendisse pellentesque dolor ut lectus ornare lacinia eget vel tortor. Nam dignissim tempus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eget metus tempor, dignissim nunc at, suscipit massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet porttitor lectus sed fringilla. Sed facilisis porta leo id pellentesque. Vestibulum sit amet justo rutrum erat posuere congue.

            Mauris vel nunc consequat, facilisis nibh et, eleifend massa. Sed in pretium neque. Sed fringilla egestas urna sit amet interdum. Proin auctor ligula at arcu vulputate, ut iaculis turpis consequat. Donec non varius sem. Proin et dui a dolor tempus tincidunt. Suspendisse libero eros, malesuada sit amet nisi ut, tempor suscipit velit. In eget feugiat felis, quis ornare ipsum. Donec id massa sem. Sed vitae tincidunt dolor, ac faucibus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta nisi eu libero placerat, pulvinar laoreet neque vestibulum. In pulvinar elementum nisl vitae sagittis.

            Praesent lorem quam, suscipit id elit id, facilisis feugiat magna. Aliquam nunc magna, tincidunt tincidunt risus et, rhoncus iaculis magna. Aenean tristique tincidunt ullamcorper. Aenean interdum nibh felis, sit amet fermentum lacus sollicitudin at. Nunc non semper nisl, quis tincidunt turpis. Maecenas aliquam enim quis ex vehicula, pulvinar ultricies nisl finibus. Maecenas elit dolor, euismod at mattis eget, tempus id ante. Nulla sit amet nulla in lectus vulputate pretium. Donec urna libero, tristique id mollis interdum, gravida vel nisi. Nam lacinia convallis lacus vitae volutpat. Cras eu dui lacus. Fusce vulputate, eros luctus elementum commodo, dolor eros iaculis justo, eget ornare neque urna quis eros. Morbi porttitor fermentum fermentum. Donec molestie risus sit amet convallis laoreet.

            Fusce augue diam, fermentum sed nunc et, posuere fermentum neque. Etiam tincidunt, metus quis aliquet accumsan, arcu nibh vestibulum massa, sit amet convallis tellus eros sit amet velit. Suspendisse in cursus metus, id gravida massa. Quisque laoreet molestie ultrices. Aliquam non sapien nisi. Praesent a consequat felis. Phasellus sagittis placerat odio eget mollis.

            Ut nec ullamcorper turpis. Proin ultricies posuere euismod. Sed volutpat volutpat sem, nec feugiat arcu elementum quis. Maecenas varius mi sem, vel accumsan quam luctus et. Vivamus id lectus euismod, hendrerit justo et, volutpat justo. Pellentesque vitae eros diam. Phasellus nec neque vitae ipsum aliquam scelerisque. Phasellus gravida, ipsum quis auctor congue, mi quam porta urna, id dapibus odio libero eget orci. Donec congue, mi eu consectetur sodales, augue nulla molestie elit, et venenatis justo dolor sed massa. Cras id metus vel ante pulvinar viverra.

            Sed feugiat pellentesque bibendum. In a enim vel ex interdum varius at eu nulla. Integer arcu neque, maximus nec tincidunt a, lobortis a turpis. Cras in molestie risus. Vivamus nec dolor rhoncus, vulputate purus ut, commodo ante. Nam in dignissim lacus, vitae aliquam magna. Sed porta dictum commodo. Aenean interdum, massa eget malesuada placerat, sapien elit facilisis sapien, id efficitur turpis libero sit amet ante. Maecenas vitae rutrum nulla. Ut id nisl vitae nisl tempor pharetra vel vel arcu.

            Donec vitae tempor ante. Ut convallis sit amet nunc a rhoncus. Praesent commodo lectus non ante maximus, sit amet dignissim lacus pulvinar. Donec et purus vitae augue tincidunt aliquet ut eget lectus. Nunc lacinia turpis nec enim feugiat maximus. Duis molestie viverra fermentum. Mauris non urna nec elit viverra placerat a in ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis congue erat, eget lobortis ligula.

            Proin suscipit diam sed gravida convallis. Pellentesque odio tortor, volutpat eget fermentum a, congue eu diam. Curabitur dapibus justo eget mi ullamcorper auctor. Duis dolor libero, fermentum vel quam eu, consectetur ullamcorper augue. Pellentesque maximus malesuada odio, ut mollis nisl lacinia sed. Nulla fringilla dolor eu est placerat, et tempor nisi tristique. Cras luctus enim vitae arcu pharetra consectetur. Mauris bibendum enim dui, et euismod massa tempor nec. Mauris interdum purus id consectetur finibus. Etiam felis arcu, fringilla nec dapibus vitae, tristique quis est. Nulla semper nisi a neque accumsan rhoncus. Mauris et augue lobortis, pharetra diam consequat, sollicitudin sem. Morbi luctus leo mollis, venenatis est eu, eleifend sem. Suspendisse non molestie nulla, rutrum commodo libero.

            Fusce consequat consequat malesuada. Nam pulvinar ex vitae est ornare laoreet. Phasellus consequat nisi ac quam convallis tempor. Curabitur iaculis lacus vel pretium condimentum. Morbi id semper ligula, non molestie tortor. Nullam id pellentesque orci, vitae tristique odio. Suspendisse sed facilisis nisl. Nulla consectetur semper magna, ac ultricies justo gravida nec. Curabitur bibendum eleifend eros non tempus. Fusce nec urna porta, congue ligula id, commodo dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

            Sed fringilla neque et faucibus iaculis. Sed mi ex, vestibulum sed vulputate ut, tristique ac felis. Quisque at mi eros. Quisque a ligula in orci auctor ullamcorper vel fringilla leo. Vivamus bibendum, est sit amet dignissim tincidunt, ligula eros suscipit urna, non vestibulum quam sem quis urna. Ut tempus mollis vestibulum. Cras vestibulum tortor vel erat interdum, vitae tristique arcu ornare. Etiam viverra augue eget nibh scelerisque dignissim.

            Nam at finibus elit. In ut sapien nec nulla porttitor iaculis. Ut arcu ligula, dignissim at erat vitae, facilisis congue lorem. Duis dictum eu leo ut eleifend. Integer maximus ligula at imperdiet cursus. Sed a erat scelerisque, tempor lectus a, maximus augue. Nam lacinia sed lectus at ullamcorper. Vivamus et sodales velit. Vestibulum in tellus mi.

            Nullam non quam et nisl convallis elementum ut at metus. Aliquam mattis ultrices egestas. Morbi at mauris nisi. Sed sed tellus porta, viverra lacus sit amet, pellentesque enim. Nullam ullamcorper condimentum convallis. Vivamus accumsan ipsum ex, eu accumsan nulla volutpat sit amet. Vivamus pharetra aliquet est id sollicitudin. Donec commodo metus ipsum, ac imperdiet nibh sollicitudin sed. Praesent porttitor mauris nisl, quis feugiat lorem placerat quis. Pellentesque at tortor lectus. Morbi molestie pharetra arcu, nec rhoncus felis suscipit ac.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut mattis lorem condimentum eros accumsan imperdiet. Nunc auctor, odio et luctus egestas, tellus arcu mattis orci, ullamcorper egestas diam mauris non nulla. Vestibulum egestas mi vitae ultricies efficitur. Donec vestibulum augue risus. Maecenas in felis convallis, laoreet tortor in, gravida magna. Aliquam volutpat ornare imperdiet. Fusce pellentesque nisi sed magna accumsan faucibus. Nunc auctor ac neque a eleifend. Sed aliquet sapien vitae enim vehicula sodales. Etiam ac elit pharetra, iaculis justo at, suscipit quam.

            Sed efficitur dictum est at mattis. Proin eu diam sit amet eros laoreet scelerisque. Mauris volutpat enim id lacus varius, in hendrerit ipsum venenatis. Cras sollicitudin fringilla quam, at vehicula erat laoreet a. Nam vitae lacinia dolor. Donec vel faucibus massa, faucibus blandit diam. Suspendisse volutpat, eros ac interdum consequat, odio mi gravida mauris, non gravida turpis diam vel risus. Vivamus quis augue a libero fermentum semper in vitae dolor. Nunc vitae nibh eget tellus sagittis condimentum. Duis id auctor turpis, ut suscipit odio. Quisque vehicula egestas dolor vitae volutpat. Suspendisse venenatis dolor ut elit porta lobortis eget ut diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <div id="BackToTop">
                    <BackToTop delayInMs={17}
                               scrollStepInPx={50}
                               showAfterScrolledOffsetInPx={320}
                               text="nach oben"
                    />
                </div>
              </div>

        );
    }
}

export default Demo;
