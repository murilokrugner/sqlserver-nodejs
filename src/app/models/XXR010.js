/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXR010', {
    XXR_CODFLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XXR_PROGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XXR_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    XXR_ATTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXR_IDIOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    XXR_TEXT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XXR_TEXT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XXR_SIZETX: {
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
    }
  }, {
    tableName: 'XXR010'
  });
};
