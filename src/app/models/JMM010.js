/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JMM010', {
    JMM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMM_CODMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    JMM_DTSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMM_DTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMM_DTPRDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMM_EXEMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMM_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMM_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMM_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMM_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    JMM_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    JMM_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    JMM_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    JMM_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    JMM_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    JMM_MULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    JMM_PUBLIC: {
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
    tableName: 'JMM010'
  });
};
