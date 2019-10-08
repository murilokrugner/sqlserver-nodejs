/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAX010', {
    AX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AX_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AX_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AX_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AX_HORAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AX_GRUPFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AX_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AX_EFETIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AX_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AX_REVPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'SAX010'
  });
};
