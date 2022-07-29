import _ from 'lodash'
import { useEffect, useState } from 'react'
import { ICheckboxListProps, IGenericLookup } from '../Types/sharedITypes'

const EditableHorizontalCheckboxList: React.FC<ICheckboxListProps> = (props) => {
  const [checkboxListData, setCheckoxListData] = useState<IGenericLookup[]>([])
  const [defaultCheckboxListData, setDefaultCheckoxListData] = useState<IGenericLookup[]>([])

  useEffect(() => {
    let data = props.data.map((item: any) => {
      return {
        value: item.value,
        label: item.label,
        checkStatus: item.checkStatus,
        associatedType: props.id,
        parentId: item?.parent
      }
    })
    setCheckoxListData(data)

    data = props.defaultData.map((item: IGenericLookup) => {
      return {
        value: item.value,
        label: item.label,
        checkStatus: props.data.filter((f: any) => f.value === item.value)[0]?.checkStatus !== undefined ?
          props.data.filter((f: any) => f.value === item.value)[0].checkStatus : item.checkStatus,
        associatedType: props.id,
        parentId: item?.parentId,
        parentName: item?.parentName
      }
    })
    setDefaultCheckoxListData(data)

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
    <ul key={_.uniqueId()} className='py-2 px-0' style={{ marginBottom: '0', listStyle: 'none', paddingLeft: '0', display: 'flex' }}>
      {defaultCheckboxListData && defaultCheckboxListData?.length > 0 ? (
        defaultCheckboxListData
          .sort((a: any, b: any) => a.parentId - b.parentId)
          .map((item: IGenericLookup) => {
            return (
              <>
                <li id={item.value} key={_.uniqueId()} className='text-muted fw-bold text-hover-primary' style={{ paddingRight: '0.49rem', paddingLeft: '0.49rem' }}
                >
                  <input
                    className={`form-check-input`}
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
              </>

            )
          })
      ) : (
        <span>Not found!</span>
      )}
    </ul >
  )
}
export default EditableHorizontalCheckboxList