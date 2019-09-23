import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}
renderInput.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    InputProps: PropTypes.object,
};
function renderSuggestion(suggestionProps) {
    const { tipos, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    
    const isSelected = (selectedItem || '').indexOf(tipos.nomeTipo) > -1;
    return (
        <MenuItem
            {...itemProps}
            key={tipos.nomeTipo}
            selected={isHighlighted}
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {tipos.nomeTipo}
        </MenuItem>
    );
}

renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired,
    itemProps: PropTypes.object.isRequired,
    selectedItem: PropTypes.string.isRequired,
    suggestion: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};


const useStyles = makeStyles(theme => ({
    textField: {
        display:'flex',
        flexDirection:'colunm',
        marginLeft:'13px',
        marginRight:'13px',
    },
}));

export default function AppSearchTipoCurso(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Downshift id="downshift-simple">
                {({
                    getInputProps,
                    getItemProps,
                    getLabelProps,
                    getMenuProps,
                    highlightedIndex,
                    inputValue,
                    isOpen,
                    selectedItem,
                }) => {
                    const { onBlur, onFocus, ...inputProps } = getInputProps({
                        placeholder: 'Tipo do curso',
                    });
                    return (
                        <div className={classes.container}>
                            {renderInput({
                                fullWidth: true,
                                classes,
                                label: 'Tipo',
                                InputLabelProps: getLabelProps({ shrink: true }),
                                InputProps: { onBlur, onFocus },
                                inputProps,
                            })}

                            <div {...getMenuProps()}>
                                {isOpen ? (
                                    <Paper className={classes.paper} square >
                                        {props.getSuggestions(inputValue).map((tipos, index) =>
                                            renderSuggestion({
                                                tipos,
                                                index,
                                                itemProps: getItemProps({ item: tipos.nomeTipo }),
                                                highlightedIndex,
                                                selectedItem,
                                            }),
                                        )}
                                    </Paper>
                                ) : null}
                            </div>
                        </div>
                    );
                }}
            </Downshift>
        </div>);
}