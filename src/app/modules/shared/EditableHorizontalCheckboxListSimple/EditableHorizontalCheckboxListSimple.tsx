import _ from 'lodash'
import { useEffect, useState } from 'react'
import { ICheckboxListProps, IGenericLookup } from '../Types/sharedITypes'

const EditableHorizontalCheckboxListSimple: React.FC<ICheckboxListProps> = (props) => {
  const [checkboxListData, setCheckoxListData] = useState<IGenericLookup[]>([])
  const [defaultCheckboxListData, setDefaultCheckoxListData] = useState<IGenericLookup[]>([])

  useEffect(() => {
    let data = props.data.map((item: IGenericLookup) => {
      return {
        value: item.value,
        label: item.label,
        checkStatus: item.checkStatus,
        associatedType: props.id
      }
    })
    setCheckoxListData([...data])

    data = props.defaultData.map((item: IGenericLookup) => {
      return {
        value: item.value,
        label: item.label,
        checkStatus: props.data.filter((f: IGenericLookup) => f.value === item.value)[0]?.checkStatus !== undefined ?
          props.data.filter((f: IGenericLookup) => f.value === item.value)[0].checkStatus : item.checkStatus,
        associatedType: props.id
      }
    })
    setDefaultCheckoxListData([...data])
  }, [])

  const handleCheckbox = (e: any, selectedIndexValue: number) => {
    const itemSelected: any = defaultCheckboxListData.filter((item: IGenericLookup) => item.value === selectedIndexValue && item.associatedType === props.id)
    itemSelected[0].checkStatus = e.target.checked
    const data: IGenericLookup[] = [itemSelected[0], ...defaultCheckboxListData.filter((item: IGenericLookup) => item.value !== selectedIndexValue)]
    setCheckoxListData(data)
    setDefaultCheckoxListData(data)
    props.setData(itemSelected)
  }

  return (
    <ul
      style={{
        listStyle: 'none',
        paddingLeft: '1px',
        borderTop: '0',
        height: '2px',
        display: 'flex',
        fontSize: '8px'
      }}
      key={_.uniqueId()}
    >
      {defaultCheckboxListData && defaultCheckboxListData?.length > 0 ? (
        defaultCheckboxListData
          .sort((a: any, b: any) => a?.label?.localeCompare(b.label))
          .map((item: IGenericLookup, index: number) => {
            return (
              <li key={_.uniqueId()}
                id={item.value} className='text-muted fw-bold text-hover-gray-800' >
                <input
                  className={`form-check-input me-${props.meWidth}`}
                  id={item.value}
                  key={_.uniqueId()}
                  type='checkbox'
                  checked={checkboxListData.filter((f: IGenericLookup) => f.value === item.value)[0]?.checkStatus !== undefined ?
                    checkboxListData.filter((f: IGenericLookup) => f.value === item.value)[0].checkStatus : item.checkStatus}
                  onChange={(e: any) => {
                    handleCheckbox(e, item.value)
                  }}
                />
              </li>
            )
          })
      ) : (
        <span>No role found!</span>
      )}
    </ul >
  )
}

export default EditableHorizontalCheckboxListSimple
