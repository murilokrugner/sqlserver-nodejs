/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T4H010', {
    T4H_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4H_MESSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4H_ANOSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4H_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4H_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T4H_QTD_PO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4H_QTD_NE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4H_INS_SU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    T4H_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    T4H_BLK_CO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4H_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T4H_PRGORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'T4H010'
  });
};
