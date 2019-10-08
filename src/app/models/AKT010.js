/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AKT010', {
    AKT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKT_CONFIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKT_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    AKT_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AKT_MVCRD1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVDEB1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVCRD2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVDEB2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVCRD3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVDEB3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVCRD4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVDEB4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVCRD5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_MVDEB5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_NIV01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_NIV02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_NIV03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_NIV04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_NIV05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_NIV06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKT_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKT_ANALIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AKT010'
  });
};
