/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DHN010', {
    DHN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHN_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DHN_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    DHN_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHN_DOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DHN_ITORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DHN_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHN_DOCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DHN_ITDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DHN_QTDATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHN_QTDTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'DHN010'
  });
};
