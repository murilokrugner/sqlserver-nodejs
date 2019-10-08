/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WFA010', {
    WFA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    WFA_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WFA_ARQEML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WFA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WFA_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WFA_USRSIG: {
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
    tableName: 'WFA010'
  });
};
