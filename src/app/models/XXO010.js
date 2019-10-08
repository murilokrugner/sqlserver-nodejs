/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXO010', {
    XXO_CODFLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXO_CODSXB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXO_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XXO_COLUNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XXO_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXO_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XXO_TEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    }
  }, {
    tableName: 'XXO010'
  });
};
