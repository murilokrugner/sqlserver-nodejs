/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED060', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NFE_CHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DATE_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XML: {
      type: "IMAGE",
      allowNull: true
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    NUMDOCNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    STATDOCNEO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DELETEDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    STATUSSFZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MOTIVOSFZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XMLREC: {
      type: "IMAGE",
      allowNull: true
    },
    DOCCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XMLCANC: {
      type: "IMAGE",
      allowNull: true
    },
    XMLCANCREC: {
      type: "IMAGE",
      allowNull: true
    },
    COLABEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED060'
  });
};
